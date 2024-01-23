interface IMenuBar {
  visibility: boolean;
}

const MenuBar: React.FC<IMenuBar> = ({ visibility }) => {

  let visibility_string = 'hidden';
  if (visibility == false) {
    visibility_string = 'hidden'
  } else {
    visibility_string = 'visible'
  }
  return (
    <div className={`${visibility_string} flex flex-col gap-4 p-7 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg border border-gray-100 text-white absolute  right-9 top-10`}>
      <a href="/#techstack" className="hover:text-gray-400">Current Tech Stack</a>
      <a href="/#contact" className="hover:text-gray-400">Contact Me</a>
      <a href="/#projects" className="hover:text-gray-400">Projects</a>
      <a href="/blog" className="hover:text-gray-400">Blog</a>
    </div>
  );
}

export default MenuBar;
