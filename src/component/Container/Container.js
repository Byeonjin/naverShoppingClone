function Container({ as: Component, className, children, ...restProps }) {
  return (
    <Component className={className} {...restProps}>
      {children}
    </Component>
  );
}

Container.defaultProps = {
  as: "div",
  className: "",
};

export default Container;
