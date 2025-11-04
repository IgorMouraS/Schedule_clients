import logo from "../../assets/logo/Logo.png";

export default function Logo() {
  return (
    <div className="relative">
      <img
        src={logo}
        alt="Logo"
        className="absolute top-0 left-0 w-30 h-auto"
      />
    </div>
  )
}