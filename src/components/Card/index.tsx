import { CardProps } from '../../modules/Card/interfaces';
import { ReactComponent as Hexagon } from '/public/icons/hexagon.svg';

export const Card = ({
  imageSource,
  icon,
  title,
  heading,
  paragraph,
}: CardProps) => {
  return (
    <div className="flex rounded-t-2xl flex-col max-w-[440px] h-[503px] w-full kaman rounded-b-2xl">
      <div className="h-full w-full">
        <img
          className="rounded-t-2xl max-h-[268px] w-full object-cover"
          src={imageSource}
          alt=""
        />
      </div>
      <div className="yes relative rounded-2xl h-full -mt-9 border border-solid">
        <Hexagon className="absolute right-0 -top-10" />
        {icon}
        <div className="flex flex-col py-5 pl-5">
          <h4 className="h4 mb-1">{title}</h4>
          <div className="wtf" />
          <strong className="my-4 pr-20">{heading}</strong>
          <p className="body-2 pr-20">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};
