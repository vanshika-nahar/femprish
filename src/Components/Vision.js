import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const useStyles = makeStyles({
    ul: {
        listStyleType: "square",
        textAign: "left",
        display: "flex",
        flexDirection: "column",
    },
    li: {
        textAign: "left",
        display: "flex"
    },
    span: {
        marginLeft: 4
    }
});

export default function Vision() {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down(480));
    const medium = useMediaQuery(theme.breakpoints.up("md"));

    const classes = useStyles();
    return (
        <div
            style={{
                backgroundColor: "#0d0d0d",
                padding: small ? "5px 0px 40px" : "50px 0px",
            }}
        >
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: small ? 30 : 45,
                                fontFamily: "Merienda",
                                fontWeight: "bold",
                                color: "#ffb3b3",
                                textAign: "center",
                                marginTop: 10,
                                marginBottom: small ? 1 : 3,
                            }}
                        >
                            Our Vision
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: small ? 8 : 20,
                                fontFamily: "Merienda",
                                fontWeight: "bold",
                                color: "#ffb3b3",
                                textAign: "left",
                                marginTop: small ? 2 : 10,
                                marginBottom: 3,
                            }}
                        >
                            <span style={{ textAlign: "justify" }}>
                                To make India a place where all genders can live with equality.
                                Ultimately, a feminist vision for India would seek to empower
                                all individuals, regardless of their gender, to reach their full
                                potential and contribute to a thriving and equitable society.
                            </span>
                            <span style={{
                                fontSize: small ? 8 : 20,
                                fontFamily: "Merienda",
                                fontWeight: "bold",
                                color: "#ffb3b3",
                                textAign: "left",
                                marginTop: small ? 2 : 10,
                                marginBottom: 3,
                                display: small ? "flex" : "none"
                            }}>
                                Our vision for feminism is to create a world where all genders are treated equally and have access to the same opportunities and rights. This includes eliminating gender-based violence, promoting women's participation in decision-making, and challenging patriarchal structures. We aim to create an inclusive and just society where all individuals can reach their full potential and contribute to a thriving and equitable society.
                            </span>
                            <ul className={classes.ul} style={{ display: small ? "none" : "flex" }}>
                                <li className={classes.li}>
                                    <span class="material-symbols-outlined">
                                        radio_button_checked
                                    </span>
                                    <span className={classes}>
                                        Equal rights, opportunities, and treatment for all genders
                                    </span>
                                </li>
                                <li className={classes.li}>
                                    <span class="material-symbols-outlined">
                                        radio_button_checked
                                    </span>
                                    <span>Elimination of gender-based violence</span>
                                </li>
                                <li className={classes.li}>
                                    <span class="material-symbols-outlined">
                                        radio_button_checked
                                    </span>
                                    <span>
                                        Increased access to education and healthcare for all genders
                                    </span>
                                </li>
                                <li className={classes.li}>
                                    <span class="material-symbols-outlined">
                                        radio_button_checked
                                    </span>
                                    <span>
                                        Promotion of women's participation in decision-making at all
                                    </span>
                                    levels
                                </li>
                                <li className={classes.li}>
                                    <span class="material-symbols-outlined">
                                        radio_button_checked
                                    </span>
                                    <span>
                                        Challenging patriarchal structures and norms that limit
                                        women's opportunities and perpetuate inequality
                                    </span>
                                </li>
                                <li className={classes.li}>
                                    <span class="material-symbols-outlined">
                                        radio_button_checked
                                    </span>
                                    <span>
                                        Addressing the gender pay gap and lack of representation of
                                        women in leadership roles
                                    </span>
                                </li>
                                <li className={classes.li}>
                                    <span class="material-symbols-outlined">
                                        radio_button_checked
                                    </span>
                                    <span>
                                        Elimination of stigma surrounding menstruation and
                                        reproductive health
                                    </span>
                                </li>
                                <li className={classes.li}>
                                    <span class="material-symbols-outlined">
                                        radio_button_checked
                                    </span>
                                    <span>
                                        Prioritization of the needs and rights of marginalized
                                        groups, including Dalit women, tribal women, and LGBTQ+
                                        individuals
                                    </span>
                                </li>
                                <li className={classes.li}>
                                    <span class="material-symbols-outlined">
                                        radio_button_checked
                                    </span>
                                    <span>
                                        Recognition of the intersectionality of different forms of
                                        oppression
                                    </span>
                                </li>
                                <li className={classes.li}>
                                    <span class="material-symbols-outlined">
                                        radio_button_checked
                                    </span>
                                    <span>
                                        Creation of an inclusive and just society for all
                                        individuals to reach their full potential and contribute to
                                        a thriving and equitable society.
                                    </span>
                                </li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
