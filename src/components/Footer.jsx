import githubIcon from "../assets/github-icon.svg"


function Footer() {
  return (
    <div id="footer">
      <img id="githubIcon" src={githubIcon} alt="Github Icon" />
      <a id="githubLink" href="https://github.com/clasei/flavorflow">FlavorFlow Repo</a>
    </div>
  )
}

export default Footer