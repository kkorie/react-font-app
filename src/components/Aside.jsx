import useSelect from '../hooks/useSelect';

function Aside() {
  const select = useSelect();

  if (select.length === 0) {
    return (
      <div className="aside">
        <section className="aside__basic">
          <div className="basic__title">기본 글꼴</div>
          <div className="basic__font">다람쥐 헌 쳇바퀴에 타고파</div>
        </section>
        <section className="aside__notselected">
          <div className="selected__title">선택 글꼴 미리보기</div>
          <div className="selected__font">글꼴을 선택해주세요.</div>
        </section>
      </div>
    );
  }

  return (
    <div className="aside">
      {select.map(s => {
        const { name, font, useLink, useCss } = s;

        return (
          <div key={name}>
            <section className="aside__basic">
              <div className="basic__title">기본 글꼴</div>
              <div className="basic__font">다람쥐 헌 쳇바퀴에 타고파</div>
            </section>
            <section className="aside__selected">
              <div className="selected__title">{name}</div>
              <div className="selected__font" style={{fontFamily: font}}>다람쥐 헌 쳇바퀴에 타고파</div>
              <div className="aside__use">
                <div className="use__title">폰트 사용하기</div>
                <div className="use__desc">HTML의 <code>&lt;head&gt;</code> 태그에 아래 코드 작성</div>
                <div className="use__useLink">{useLink}</div>
                <div className="use__desc2">그리고 <code>&lt;style&gt;</code> 태그에 font-family 작성</div>
                <div className="use__useCss">{useCss}</div>
              </div>
            </section>
          </div>
        )
      })}
    </div>
  )
}

export default Aside;