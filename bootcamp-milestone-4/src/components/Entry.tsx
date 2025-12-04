import style from "./entry.module.css";

type EntryProp = {
  title: string;
  info?: string;
  description?: string;
};

export default function Entry({ title, info, description }: EntryProp) {
  let infoElement;
  let descriptionElement;

  if (info) {
    infoElement = <p className={style.entryinfo}>{info}</p>;
  }

  if (description) {
    descriptionElement = <p className={style.entrydescription}>{description}</p>
  }

  return (
    <div className={style.entry}>
      <h3 className={style.entrytitle}>{title}</h3>
      {infoElement}
      {descriptionElement}
    </div>
  );
}
