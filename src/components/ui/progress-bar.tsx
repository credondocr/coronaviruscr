import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

let timeout: NodeJS.Timeout

const start = () => {
  timeout = setTimeout(NProgress.start, 100)
}

const done = () => {
  clearTimeout(timeout)
  NProgress.done()
}

Router.events.on('routeChangeStart', start)
Router.events.on('routeChangeComplete', done)
Router.events.on('routeChangeError', done)

const ProgressBar: React.FC = () => {
  return (
    <style jsx global>
      {`
        /* Make clicks pass-through */
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: #badc58;
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }
        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #badc58, 0 0 5px #badc58;
          opacity: 1;
          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }
      `}
    </style>
  )
}

export default ProgressBar
