import React, { Fragment, useEffect, useState } from 'react';

export type GithubGiteeProps = {
  href: string;
};

export default function DomainVerify(props: React.PropsWithChildren<GithubGiteeProps>) {
  const { href } = props || {};
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (window && window.location) {
      let isVisiable = false
      const protocol = window.location.protocol;
      const hostname = href.replace(/^(https?):\/\//, '');
      if (window.location.href.replace(/^(https?):\/\//, '').indexOf(hostname) > -1) {
        isVisiable = true;
      }
      if (/^(https?):\/\//.test(href) && !(new RegExp(`^${protocol}`)).test(href)) {
        isVisiable = false;
      }
      setHide(isVisiable);
    }
  }, [href]);
  if (!hide) return <Fragment />;
  return (
    <Fragment>
      {React.Children.toArray(props.children).map((child: React.ReactNode) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, { ...child.props });
      })}
    </Fragment>
  )
}
