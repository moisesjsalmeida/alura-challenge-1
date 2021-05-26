import dynamic from 'next/dynamic';
import Button from '../../../../layouts/components/Button';
import colors from '../../../../styles/colors';
import { useCodeEditorContext } from '../../contexts/CodeEditorContext';
import { CodeEditorContainer, CodeInputContainer } from './codeEditor-styles';

const CodeMirror = dynamic(
  () => {
    import('codemirror/mode/xml/xml');
    import('codemirror/mode/javascript/javascript');
    import('codemirror/mode/css/css');
    import('codemirror/mode/markdown/markdown');
    import('codemirror/addon/lint/lint');
    import('codemirror/addon/edit/closebrackets');
    import('codemirror/theme/material.css');
    import('codemirror/theme/dracula.css');
    import('codemirror/theme/cobalt.css');
    import('codemirror/theme/mdn-like.css');
    import('codemirror/theme/monokai.css');
    return import('react-codemirror');
  },
  { ssr: false }
);

const CodeEditor = () => {
  const { projectColor, projectTheme, language, inputCode, setInputCode } =
    useCodeEditorContext();

  function handleChange(editor, data, value) {
    setInputCode(value);
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
          {/* Mac styled circles */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill={colors.macRed} />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill={colors.macYellow} />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill={colors.macGreen} />
          </svg>

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
