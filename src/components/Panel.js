import classNames from "classnames"
function Panel ({ children, className, ...rest }) {
  const finaleClassName = classNames("border rounded p-3 shadow bg-white w-full", className)

  return (
    <div className={finaleClassName} {...rest}>{children}</div>
  )
}

export default Panel