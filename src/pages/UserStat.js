import * as React from "react";
import RadarChart from "../Components/Molecules/RadarChart";
import ProjectCard from "../Components/Organisms/ProjectCard";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Pagination from "react-js-pagination";
import _styled from "styled-components";


export default function UserStat() {
  const [isLeader, setIsLeader] = React.useState(false);

  React.useEffect(() => {
    if (isLeader === localStorage.getItem("userId")) {
      setIsLeader(true);
    }
  }, [isLeader]);

  const [page, setPage] = React.useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <div>유저명 : </div>

          <img src="https://ghchart.rshah.org/jamesujeon" alt="" />
          {/* <img src="https://ghchart.rshah.org/219138/jamesujeon"/> */}

          <div style={{ display: "flex" }}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

          <div>
            프로젝트 횟수 Github URL Tech Blog BOJ Tier Programmers Completed
            Projects Skills Special Stack Education Github repository Github
            commit Projects With Teaming #1 ~~ #2 ~~ Projects Involved : #1
            Projects completed : #2 Projects Abandonment : #1
          </div>
        </div>
        <div>
          <div style={{ width: "300px" }} display="flex">
            <RadarChart></RadarChart>
          </div>

          <div>
            사용 언어 통계
            {/* github-readme-stats.vercel.app/api/top-langs/?username={사용자명}&langs_count=8 */}
          </div>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Item>스킬창</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>xs=3</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>xs=3</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>xs=3</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>xs=4</Item>
              </Grid>
              <Grid item xs={8}>
                <Item>xs=8</Item>
              </Grid>
            </Grid>
          </Box>
        </div>

        <PaginationHorizontal>
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={50}
            pageRangeDisplayed={5}
            prevPageText="‹"
            nextPageText="›"
            onChange={handlePageChange}
          ></Pagination>
        </PaginationHorizontal>
      </div>
    </>
  );
}

const PaginationHorizontal = _styled.div`& ul li {list-style-type: none; float: left; margin-right:4px;}`

