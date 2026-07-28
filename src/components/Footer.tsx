import { forwardRef } from "react";

const Footer = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <footer {...props} ref={ref} className="bg-black p-4 text-white flex items-center justify-center">
    © 2023 Your Company Name. All rights reserved.
  </footer>
));

export default Footer;