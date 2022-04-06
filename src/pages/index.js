import React from "react";
import Loadable from "react-loadable";
import Spinner from "../Components/Organisms/Spinner";

const Loading = () => {
    return (
        <Spinner/>
    );
  };
  
  export const CreateProject = Loadable({
    loader: () => import("./CreateProject"),
    loading: Loading,
  });

  export const Login = Loadable({
    loader: () => import("./Login"),
    loading: Loading,
  });

  export const Main = Loadable({
    loader: () => import("./Main"),
    loading: Loading,
  });

  export const Privacy = Loadable({
    loader: () => import("./Privacy"),
    loading: Loading,
  });

  export const ProjectSearch = Loadable({
    loader: () => import("./ProjectSearch"),
    loading: Loading,
  });

  export const SignUp = Loadable({
    loader: () => import("./SignUp"),
    loading: Loading,
  });

  export const Survey = Loadable({
    loader: () => import("./Survey"),
    loading: Loading,
  });

  export const UpdateProject = Loadable({
    loader: () => import("./UpdateProject"),
    loading: Loading,
  });

  export const UserStat = Loadable({
    loader: () => import("./UserStat"),
    loading: Loading,
  });

  export const UserEdit = Loadable({
    loader: () => import("./UserEdit"),
    loading: Loading,
  });

  export const UserDetailModal = Loadable({
    loader: () => import("./UserDetailModal"),
    loading: Loading,
  });

  export const ProjectDetailModal = Loadable({
    loader: () => import("./ProjectDetailModal"),
    loading: Loading,
  });

  
  export const ProjectRoom = Loadable({
    loader: () => import("./ProjectRoom"),
    loading: Loading,
  });