import Link from "next/link";

const Home = () => {
  return (
    <div>
      <main>
        This is the index page that is page if someone visits the bare URL
        <ul>
          <li>
            {" "}
            <Link href="/login"> Login</Link>
          </li>{" "}
          : design done
          <li>
            {" "}
            <Link href="/signup"> signup</Link>
          </li>{" "}
          : not done
          <li>
            {" "}
            <Link href="/otp">otp</Link>
          </li>{" "}
          : not done
          <li>
            {" "}
            <Link href="/dashboard">dashboard</Link>
          </li>{" "}
          : not done
          <li>
            {" "}
            <Link href="/training-area">training-area</Link>
          </li>{" "}
          : not done
          <li>
            {" "}
            <Link href="/training-area/1">training-area/1</Link>
          </li>{" "}
          : not done
        </ul>
      </main>
    </div>
  );
};
export default Home;
