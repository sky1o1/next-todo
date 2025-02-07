// interface IButtonProps {
//   title: string;
//   variant?: "primary" | "danger" | "info" | "ghost";
//   onClick: () => void;
// }

type TButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "danger" | "info" | "ghost";
  onClick: () => void;
};

const Button: React.FC<TButtonProps> = ({
  title,
  variant = "primary",
  onClick,
}) => {
  function ButtonFxn(variant: "primary" | "danger" | "info" | "ghost") {
    switch (variant) {
      case "primary":
        return (
          <button
            className="bg-green-500 p-2 rounded-lg cursor-pointer hover:bg-green-400 text-white"
            onClick={onClick}
          >
            {title}
          </button>
        );
      case "danger":
        return (
          <div
            className="bg-red-500 p-2 rounded-lg cursor-pointer hover:bg-red-400 text-white"
            onClick={onClick}
          >
            {title}
          </div>
        );
      case "info":
        return (
          <div
            className="bg-blue-500 p-2 rounded-lg cursor-pointer hover:bg-blue-400 text-white"
            onClick={onClick}
          >
            {title}
          </div>
        );
      case "ghost":
        return (
          <div
            className="bg-green-500 p-2 rounded-lg cursor-pointer hover:bg-green-400 text-white"
            onClick={onClick}
          >
            {title}
          </div>
        );
      default:
        return (
          <div
            className="bg-white-500 p-2 rounded-lg cursor-pointer hover:bg-white-400 text-white"
            onClick={onClick}
          >
            {title}
          </div>
        );
    }
  }
  return ButtonFxn(variant);
};

export default Button;
