import style from "./infocard.module.css";

type InfocardProps = {
    title: string
    content: string
};


export default function Infocard({title, content}: InfocardProps) {
  return (
    <div className={style.infocard}>
      <h3 className={style.infocardtitle}>{title}</h3>
      <p className={style.infocardcontent}>{content}</p>
    </div>
  );
}
