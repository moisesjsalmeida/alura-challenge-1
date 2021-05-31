import dynamic from 'next/dynamic';
import CodeInputContainer from '../../../../layouts/components/CodeInputContainer';
import MacTopBar from '../../../../layouts/components/MacTopBar';
import { useCodeEditorContext } from '../../contexts/CodeEditorContext';
import { CodeEditorContainer } from './codeEditor-styles';

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
    import('codemirror/addon/lint/lint');
    import('codemirror/addon/edit/closebrackets');
    import('codemirror/theme/material.css');
    import('codemirror/theme/dracula.css');
    import('codemirror/theme/cobalt.css');
    import('codemirror/theme/mdn-like.css');
    import('codemirror/theme/monokai.css');
    import('codemirror/theme/nord.css');
    import('codemirror/theme/oceanic-next.css');
    import('codemirror/theme/rubyblue.css');
    import('codemirror/theme/solarized.css');
    return import('react-codemirror');
  },
  { ssr: false }
);

const CodeEditor = () => {
  const { projectColor, projectTheme, language, inputCode, setInputCode } =
    useCodeEditorContext();

  function handleChange(editor, data, value) {
    setInputCode(editor);
  }

  return (
    <CodeEditorContainer>
      <div
        style={{
          background: projectColor,
          padding: '2rem',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <CodeInputContainer>
          <MacTopBar />

          {CodeMirror && (
            <CodeMirror
              onChange={handleChange}
              value={inputCode}
              options={{
                lineWrapping: true,
                lint: true,
                autoCloseBrackets: true,
                lineNumbers: false,
                smartIndent: true,
                matchBrackets: true,
                mode: language,
                theme: projectTheme,
              }}
            />
          )}
        </CodeInputContainer>
      </div>
    </CodeEditorContainer>
  );
};

export default CodeEditor;