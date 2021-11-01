import Navbar from 'components/navbar.js';

export default function Layout({ children, ...props }) {
  const { title } = props;

  return (
    <div className="columns is-gapless-mobile">
      <div className="column is-full-mobile is-three-fifths-desktop is-offset-one-fifth-desktop">
        <div id="wrapper" className="container">
          <div className="columns">
            <div className="column auto">
              <Navbar />
              <article className="article">
                <section className="section is-size-6">
                  {children}
                </section>
              </article>
              <hr />
              <footer className="has-text-right">
                <div id="edamam-badge" data-color="white"></div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
