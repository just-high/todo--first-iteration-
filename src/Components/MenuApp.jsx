import React from "react";

import styled from "styled-components";
import {useSelector} from "react-redux";
import {colors} from "../GlobalStuff";
import {GridContent} from "../ComponentsLib/Grid";
import {Flex} from "../ComponentsLib/Flex";
import {H1, H2} from "../ComponentsLib/Typography";
import TimerTwoToneIcon from '@material-ui/icons/TimerTwoTone';
import AlarmAddTwoToneIcon from '@material-ui/icons/AlarmAddTwoTone';
import AlarmOnTwoToneIcon from '@material-ui/icons/AlarmOnTwoTone';
import {TimerOffTwoTone} from "@material-ui/icons";
import {Categories} from "../ComponentsLib/Categories/Categories";
import {Projects} from "../ComponentsLib/Projects/Projects";


const MenuWrapper = styled(GridContent)`
  grid-template-columns: 1fr 1fr repeat(3, 2fr) 1fr;
  grid-gap: 0;
  height: calc(100vh - 3.6rem);
`
const MenuBody = styled(Flex)`
  grid-column: 2/span 4;
  flex-direction: column`


const CategoryWrapper = styled(Flex)`
  margin-top: 3rem;
  padding-top: 3rem;
  flex-direction: column;
  justify-content: left;

  & h1 {

  }
`
const CategoryItem = styled(Flex)`
  flex-direction: row;
  align-items: center;
  color: ${colors.tertiary};

  & svg {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: ${props => props.color};
  }

  &:hover {
    color: blue;
  }
`
const CategoryName = styled.div`
`

const ProjectWrapper = styled(Flex)`
  margin-top: 3rem;
  flex-direction: column;
  align-items: stretch;
`

const ProjectName = styled(Flex)`
  justify-content: left;

  & h3 {
    word-wrap: break-word;
    overflow: hidden;
    text-align: left;
    font-size: 2rem;
  }
`
export const MenuApp = () => {


    let categoriesData = useSelector(state => state.categories.categoriesList)
    let projectsData = useSelector(state => state.projects.projectList)
    return (
        <>
            <MenuWrapper>
                <MenuBody>
                    <Categories data={categoriesData}/>
                    <Projects data={projectsData}/>
                </MenuBody>
            </MenuWrapper>
        </>
    );
};

