import React from 'react';
import parse, { domToReact } from 'html-react-parser';
import Table, { TableHead, TableBody, TableRow, TableHeader, TableCell } from './Table';
import List, { ListItem } from './List';
import Button from './Button';
import { Link } from 'react-router-dom';

const RichText = ({ content, className = '' }) => {
  if (!content) return null;

  const options = {
    replace: (domNode) => {
      if (domNode.type === 'tag') {
        
        // 1. TABLE REPLACEMENT
        if (domNode.name === 'table') {
          return (
            <Table className={domNode.attribs.class}>
              {domToReact(domNode.children, options)}
            </Table>
          );
        }
        if (domNode.name === 'thead') {
          return <TableHead>{domToReact(domNode.children, options)}</TableHead>;
        }
        if (domNode.name === 'tbody') {
          return <TableBody>{domToReact(domNode.children, options)}</TableBody>;
        }
        if (domNode.name === 'tr') {
          return <TableRow>{domToReact(domNode.children, options)}</TableRow>;
        }
        if (domNode.name === 'th') {
          return <TableHeader>{domToReact(domNode.children, options)}</TableHeader>;
        }
        if (domNode.name === 'td') {
          // Detect if it's the first td in a row to apply specific styling
          const isFirst = domNode.parent && domNode.parent.children.filter(n => n.name === 'td')[0] === domNode;
          return <TableCell isFirst={isFirst}>{domToReact(domNode.children, options)}</TableCell>;
        }

        // 2. LIST REPLACEMENT
        if (domNode.name === 'ul') {
          return <List type="unordered" className={domNode.attribs.class}>{domToReact(domNode.children, options)}</List>;
        }
        if (domNode.name === 'ol') {
          return <List type="ordered" className={domNode.attribs.class}>{domToReact(domNode.children, options)}</List>;
        }
        if (domNode.name === 'li') {
          return <ListItem>{domToReact(domNode.children, options)}</ListItem>;
        }

        // 3. BUTTON/LINK REPLACEMENT
        if (domNode.name === 'a') {
          const classes = domNode.attribs.class || '';
          const href = domNode.attribs.href || '#';
          
          let variant = null;
          if (classes.includes('btn-primary')) variant = 'primary';
          else if (classes.includes('btn-blue')) variant = 'blue';
          else if (classes.includes('btn-white')) variant = 'white';
          else if (classes.includes('btn-ghost')) variant = 'ghost';

          if (variant) {
            // It's a button!
            const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
            if (isExternal) {
              return (
                <Button href={href} variant={variant} target="_blank" rel="noopener noreferrer">
                  {domToReact(domNode.children, options)}
                </Button>
              );
            } else {
              return (
                <Button to={href.replace('.html', '')} variant={variant}>
                  {domToReact(domNode.children, options)}
                </Button>
              );
            }
          }
          
          // Regular internal links
          if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#')) {
             return (
               <Link to={href.replace('.html', '')} className={classes}>
                 {domToReact(domNode.children, options)}
               </Link>
             )
          }
        }
      }
    }
  };

  return (
    <div className={`prose prose-lg max-w-none prose-headings:font-condensed prose-headings:font-bold prose-headings:text-navy prose-p:text-text prose-a:text-blue prose-img:rounded-xl ${className}`}>
      {parse(content, options)}
    </div>
  );
};

export default RichText;
