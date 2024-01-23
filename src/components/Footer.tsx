const Footer = () => {
  return (
    <div className="sticky top-[100vh] bg-gray-600 pb-10 h-[150px] w-screen flex flex-col gap-3 justify-center justify-self-center text-white">
      <p className="w-screen flex justify-center text-md  bg-gray-600 pt-2">Rights Reserved - Ethan Herring</p>
      <div className="flex gap-6 text-sm mx-auto">
        <a href="https://github.com/ethanherring">Github</a>
        <a href="https://www.linkedin.com/in/ethan-herring-a00448132">LinkedIn</a>
        <a href="/blog">Blog</a>
      </div>
    </div>
  )
}

export default Footer;
