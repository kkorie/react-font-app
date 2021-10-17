import useActions from "../hooks/useActions";
import useFonts from "../hooks/useFonts";

function Font() {
  const fonts = useFonts();
  const { addFont } = useActions();
  return (
    <div className="fonts">
      {fonts.map((f) => {
        const {name, font, useLink, useCss} = f
        const click = () => {
          addFont(name, font, useLink, useCss);
        }
        return (
          <section className="font" key={name} onClick={click}>
            <div className="font__title">{name}</div>
            <div className="font__content" style={{fontFamily: font}}>다람쥐 헌 쳇바퀴에 타고파</div>
          </section>
        )
      })}
    </div>
  )
}

export default Font;