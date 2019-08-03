import { css } from 'emotion'

const workerStyle = css(css`
  color: green;
`)

postMessage("Hello from worker, class name: " + workerStyle)