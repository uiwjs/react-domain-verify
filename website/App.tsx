import React from 'react';

import MarkdownPreview from '@uiw/react-markdown-preview';
import GitHubCorners from '@uiw/react-github-corners';
import Github from '@uiw/react-shields/lib/esm/github';
import Npm from '@uiw/react-shields/lib/esm/npm';

import logo from './logo.svg';
import './App.css';
import DomainVerify from '../';
import MDStr from '../README.md';


const App: React.FC = () => {
  return (
    <div className="App">
      <GitHubCorners zIndex={9999} fixed target="__blank" href="https://github.com/uiwjs/react-domain-verify" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Verify that the access domain name displays content.
        </p>
        <div>
          <DomainVerify href="https://uiwjs.github.io">
            访问 https://uiwjs.github.io 域名显示子组件
          </DomainVerify>
          <br />
          <DomainVerify href="https://uiw.gitee.io">
            访问 https://uiw.gitee.io 域名显示子组件
          </DomainVerify>
          <br />
          <DomainVerify href="uiw.gitee.io">
            访问 https://uiw.gitee.io 和 http://uiw.gitee.io 域名显示子组件
          </DomainVerify>
        </div>
      </header>

      <MarkdownPreview className="App-markdown" source={MDStr.replace(/([\s\S]*)<!--dividing-->/, '')} />

      <div className="App-footer">
        <Github user="uiwjs" repo="react-domain-verify">
          <Github.Social type="forks" href="https://github.com/uiwjs/react-domain-verify" />
          <Github.Social type="stars" href="https://github.com/uiwjs/react-domain-verify/stargazers" />
          <Github.Social type="watchers" href="https://github.com/uiwjs/react-domain-verify/watchers" />
        </Github>
        <Npm.Version scope="@uiw" packageName="react-domain-verify" href="https://www.npmjs.com/package/@uiw/react-domain-verify" />
      </div>
    </div>
  );
}

export default App;
