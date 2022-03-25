import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { setLogOut } from "../redux/modules/users";
const Nav = tw.div`
  min-w-[90rem]
  pt-5
  pb-5
  border-b-black
`;

function Header() {
  const isLogin = useSelector((state) => state.users.is_login);
  const dispatch = useDispatch();

  if (window.location.pathname === "/projectRoom") return null;

  return (
    <div className="border-b-2">
      <Nav className="grid items-center grid-cols-12 justify-items-center">
        <Link
          to="/"
          className="col-span-1 col-start-2 text-xl text-[#593CE5] font-notoB"
        >
          Teaming
        </Link>

        {isLogin && (
          <Link
            to="/createProject"
            className="col-start-5 col-end-6 text-base font-noto3"
          >
            프로젝트 등록
          </Link>
        )}

        {!isLogin && (
          <Link
            to="/"
            onClick={() => {
              window.alert("로그인 후 이용이 가능합니다!");
            }}
            className="col-start-5 col-end-6 text-base font-noto3"
          >
            프로젝트 등록
          </Link>
        )}

        <Link
          to="/projectFind"
          className="col-start-6 col-end-7 text-base font-noto3"
        >
          프로젝트 찾기
        </Link>
        <Link to="/" className="col-start-7 col-end-8 text-base font-noto3">
          메이트 찾기
        </Link>
        <Link to="/" className="col-start-8 col-end-9 text-base font-noto3">
          이용후기
        </Link>
        {!isLogin && (
          <>
            <Link
              to="/login"
              className="col-start-10 col-end-11 text-base font-noto3"
            >
              로그인
            </Link>
            <Link
              to="/signUp"
              className="col-start-11 col-end-12 bg-[#7545F2] rounded pl-5 pr-5 pt-1.5 pb-1.5 text-white font-notoB"
            >
              회원가입
            </Link>
          </>
        )}
        {isLogin && (
          <>
            <Link
              to="/login"
              onClick={() => {
                dispatch(setLogOut());
              }}
              className="col-start-10 col-end-11 text-base font-noto3"
            >
              로그아웃
            </Link>
            <Link
              to="/userStats"
              className="col-start-11 col-end-12 bg-[#7545F2] rounded pl-5 pr-5 pt-1.5 pb-1.5 text-white font-notoB"
            >
              마이페이지
            </Link>
          </>
        )}
      </Nav>
    </div>
  );
}

export default Header;
