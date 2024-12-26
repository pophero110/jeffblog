import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import mermaid from "mermaid";

const Mermaid = ({ chart }: { chart: string }) => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, [chart]);

  return <div className="mermaid">{chart}</div>;
};

const StyledMarkdown = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ ...props }) => (
          <h1 className="text-2xl font-bold my-4" {...props} />
        ),
        h2: ({ ...props }) => (
          <h2 className="text-1xl font-bold my-4" {...props} />
        ),
        p: ({ ...props }) => <p className="my-2" {...props} />,
        ul: ({ ...props }) => (
          <ul className="list-disc list-inside my-2" {...props} />
        ),
        li: ({ ...props }) => <li className="ml-4" {...props} />,
        code: ({ inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match && match[1] === "mermaid" ? (
            <Mermaid chart={String(children).replace(/\n$/, "")} />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default StyledMarkdown;
