import styled from 'styled-components';

const Breadcrumb = styled.section`
  background: #eee;
  padding: 11px 0;
  margin-bottom: 16px;
  ul {
      margin-left: 28px;
  }
  ul li {
      font-size: 1.2em;
      font-weight: normal;
      float: left;
      margin-right: 6px;
  }
  ul li a {
      color: #6c6c6c;
      text-decoration: none;
  }
  @media screen and (max-width: 960px) {
      & {
          display: none;
      }
`;

export default ({content, place}) => (
    <Breadcrumb className="row" id="breadcrumb">
        {console.log(place)}
        <div className="container">
            <ul className="component">
                {content.map(current => (
                    <li itemscope itemtype="">
                        <a href={current.link} itemprop="url"><span itemprop="title">{current.name}</span></a> &nbsp;&gt;
                    </li>
                ))}
                <li itemscope itemtype="">
                    <a href={place.link} itemprop="url"><span itemprop="title">{place.name}</span></a>
                </li>
            </ul>
        </div>
    </Breadcrumb>
);