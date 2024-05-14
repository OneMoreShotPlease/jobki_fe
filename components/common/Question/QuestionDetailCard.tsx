import { Card, CardContent, CardTitle } from '@/components/ui/Card';

interface DetailCardProps {
  title?: string;
  content?: string;
}
const QuestionDetailCard = ({
  title = '리액트란 무엇인가에 대해 설명',
  content = '사용자 인터페이스 개발을 위한 자바스크립트 기반 라이브러리입니다.기존 html,css,javascript 로도 웹을 개발할 수는 있지만, 리액트의 다양한 특징들로인해 사용자와 상호작용 할 수 있는 동적 UI의 개발을 좀더 쉽게 할 수 있습니다.앞서 말씀드린 다양한 특징으로는 Component 기반 구조, Virtual DOM, Props와 State, JSX가 있습니다.React는 UI를 Component라는 단위로 쪼개고 내부적으로 데이터의 상태나 UI 구성에 대해서 Component 내부적으로 구성하고 Component를 호출하는 것으로 코드 재사용성을 높일 수 있습니다.동적 UI에서는 수많은 사용자 상호작용이 일어나고, 그에 따른 화면의 재렌더링이 발생합니다.Virtual DOM은 화면에 그려지는 DOM 구조를 가상으로 만들고, 실제 DOM 구조와 비교해 변경이 일어난 사항만 반영을 해 불필요한 Render를 통한 자원 낭비를 개선해줍니다.Props 컴포넌트 구조에서 단방향 데이터 흐름에 따른 부모 컴포넌트가 자식 컴포넌트로 전달하는 데이터를 의미합니다.State는 컴포넌트 내부에서 동적인 데이터를 다룰 때 사용되며, 사용자와의 상호작용을 통한 데이터의 동적 변경 및 렌더링 여부의 지표가 되기도 합니다.JSX는 Javascript를 기반으로 HTML 태그를 사용할 수 있게 해주는 템플릿 언어입니다. 컴포넌트로 분리되는 React 특성상 html을 Javascript와 함께 component로 통합해 관리 할 수 있도록 해줍니다. 또한 변수 또는 State 등의 상태로 인한 동적인 페이지를 그릴 때, html의 변화를 좀더 직관적으로 다룰 수 있습니다.',
}: DetailCardProps) => {
  return (
    <Card className="flex flex-col gap-2 p-4">
      <CardTitle>{title}</CardTitle>
      <CardContent className="break-all p-0">{content}</CardContent>
    </Card>
  );
};

export default QuestionDetailCard;
