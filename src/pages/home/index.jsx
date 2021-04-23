import React from 'react';
import ReactDOM from 'react-dom';
import { getScrollTop, getLink } from '../../../utils';
import Header from '../../components/header';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Language from '../../components/language';
import Item from './featureItem';
import homeConfig from '../../../site_config/home';
import './index.scss';

class Home extends Language {

  constructor(props) {
    super(props);
    this.state = {
      headerType: 'primary',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop = getScrollTop();
      if (scrollTop > 66) {
        this.setState({
          headerType: 'normal',
        });
      } else {
        this.setState({
          headerType: 'primary',
        });
      }
    });

    fetch('https://arthas.aliyun.com/api/starCount')
    .then(res => res.text())
    .then((data) => {
        this.setState({
          starCount: data
        });
    });

    fetch('https://arthas.aliyun.com/api/forkCount')
    .then(res => res.text())
    .then((data) => {
        this.setState({
          forkCount: data
        });
    });
  }

  render() {
    const { starCount } = this.state;
    const { forkCount } = this.state;
    const language = this.getLanguage();
    const dataSource = homeConfig[language];
    const { headerType } = this.state;
    const headerLogo = headerType === 'primary' ? '/img/arthas_black.png' : '/img/arthas_color.png';
    return (
      <div className="home-page">
        <section className="top-section">
          <Header
            currentKey="home"
            type={headerType}
            logo={headerLogo}
            language={language}
            onLanguageChange={this.onLanguageChange}
          />
          <div className="vertical-middle">
            <div className="product-name">
              <h2>{dataSource.brand.brandName}</h2>
            </div>
            <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
            <div className="button-area">
            {
              dataSource.brand.buttons.map(b => <Button type={b.type} key={b.type} link={b.link} target={b.target}>{b.text}</Button>)
            }
            </div>
            <div className="github-buttons">
                <a href="https://github.com/alibaba/arthas" target="_blank" rel="noopener noreferrer">
                    <div className="star">
                        <img src="https://img.alicdn.com/tfs/TB1FlB1JwHqK1RjSZFPXXcwapXa-32-32.png" />
                        <span className="count">{starCount}</span>
                    </div>
                </a>
                <a href="https://github.com/alibaba/arthas/fork" target="_blank" rel="noopener noreferrer">
                    <div className="fork">
                        <img src="https://img.alicdn.com/tfs/TB1zbxSJwDqK1RjSZSyXXaxEVXa-32-32.png" />
                        <span className="count">{forkCount}</span>
                    </div>
                </a>
            </div>
          </div>
          <div className="animation animation1" />
          <div className="animation animation2" />
          <div className="animation animation3" />
          <div className="animation animation4" />
          <div className="animation animation5" />
        </section>
        <section className="introduction-section">
          <div className="introduction-body">
            <div className="introduction">
              <h3>{dataSource.introduction.title}</h3>
              <p>{dataSource.introduction.desc}</p>
            </div>
            <img src={getLink(dataSource.introduction.img)} />
          </div>
        </section>
        <section className="feature-section">
          <h3>{dataSource.features.title}</h3>
          <ul>
          {
            dataSource.features.list.map((feature, i) => (
              <Item feature={feature} key={i} />
            ))
          }
          </ul>
        </section>
        <section className="start-section">

        </section>
        <section className="users-section">
          <h3>{dataSource.users.title}</h3>
          <p>{dataSource.users.desc}</p>
          <div className="users">
          {
            dataSource.users.list.map((user, i) => (
              <img src={getLink(user)} key={i} />
            ))
          }
          </div>
        </section>
        <Footer logo="/img/arthas_black.png" language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
