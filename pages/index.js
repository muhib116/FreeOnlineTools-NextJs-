import Nav from "../components/Nav";
import Header from "../components/Header";
import CategoryWiseTools from '../components/Tools/CategoryWiseTools'
import TwoGridSection from "../components/TwoGridSection";
import Services from "../components/Services";
import WorkingProcess from "../components/WorkingProcess";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

// demo data
// const about = {
//   title: '<span>Best</span> Agency',
//   subtitle: 'Why Freelance-Corner ',
//   description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//   list: [
//     "It has survived not only five centuries",
//     "remaining essentially unchanged",
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
//   ],
//   link: '#',
//   linkText: 'Read more...',
//   image: 'about-us.jpg'
// }

export default function Home() {
  return (
    <>
        <Nav />
        <Header />

        <section className={["outer_container"].join(" ")}>
            <div className={["inner_container"].join(" ")}>
                <div className={["main_content"].join(" ")}>
                    <div className={["content"].join(" ")}>
                        <CategoryWiseTools />
                    </div>
                    <aside className={["side_bar bg-red-400 h-40"].join(" ")}>

                    </aside>
                </div>
            </div>
        </section>

        {/* <TwoGridSection data={ about } isReverse={true} />
        <Services />
        <WorkingProcess />
        <Portfolio />
        <Footer /> */}
    </>
  );
}
