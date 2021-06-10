import dynamic from 'next/dynamic';
import React from 'react';
import CodeInputContainer from '../../../../layouts/components/CodeInputContainer';
import MacTopBar from '../../../../layouts/components/MacTopBar';
import CodePreviewContainer from './codePreview-styles';

const CodeMirror = dynamic(
  () => {
    import('codemirror/mode/xml/xml');
    import('codemirror/mode/javascript/javascript');
    import('codemirror/mode/css/css');
    import('codemirror/mode/go/go');
    import('codemirror/mode/python/python');
    import('codemirror/mode/php/php');
    import('codemirror/mode/r/r');
    import('codemirror/mode/sql/sql');
    import('codemirror/theme/material.css');
    import('codemirror/theme/dracula.css');
    import('codemirror/theme/cobalt.css');
    import('codemirror/theme/mdn-like.css');
    import('codemirror/theme/monokai.css');
    import('codemirror/theme/nord.css');
    import('codemirror/theme/oceanic-next.css');
    import('codemirror/theme/rubyblue.css');
    import('codemirror/theme/solarized.css');
    return import('react-codemirror2').then((mod) => mod.Controlled);
  },
  { ssr: false }
);

function CodePreview({ code, language, theme, color }) {
  return (
    <CodePreviewContainer>
      <div
        style={{
          background: color,
          padding: '1.5rem',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <CodeInputContainer>
          <MacTopBar />
          {CodeMirror && (
            <CodeMirror
              value={code}
              options={{
                lineWrapping: true,
                mode: language,
                theme: theme,
                readOnly: 'nocursor',
              }}
            />
          )}
        </CodeInputContainer>
      </div>
    </CodePreviewContainer>
  );
}

export default CodePreview;
