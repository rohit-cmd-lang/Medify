import React from "react";
import "./Faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import faqImage from "../../assets/faq-image.png";
import happyPatients from "../../assets/happy_patients.png";
import faqLove from "../../assets/faq-love.png";

const Faq = () => {
  return (
    // TODO: Fix the bg color if you can
    <div className="faq">
      <div className="faq-container">
        <div className="faq-heading">
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "600",
              color: "var(--primary-color)",
            }}
          >
            Get Your Answer
          </p>
          <p className="faq-subheading">Frequently Asked Questions</p>
        </div>
        <div className="faq-content">
          <div className="faq-content-images">
            {/* images here */}
            <img src={faqImage} alt="stock-image" className="faq-image" />
            <img
              src={happyPatients}
              alt="happy patients"
              className="happy-patients-image"
            />
            <img src={faqLove} alt="" className="faq-love" />
          </div>
          <div className="accordion">
            {/* accordion here */}
            <Accordion
              sx={{
                boxShadow: "none",
                border: "none",
                "&:before": { display: "none" },
                padding: "8px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: "#2AA7FF" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "30px",
                  }}
                >
                  Why choose our medical for your family?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                boxShadow: "none",
                border: "none",
                "&:before": { display: "none" },
                padding: "8px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: "#2AA7FF" }} />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "30px",
                  }}
                >
                  Why we are different from others?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                boxShadow: "none",
                border: "none",
                "&:before": { display: "none" },
                padding: "8px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: "#2AA7FF" }} />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "30px",
                  }}
                >
                  Trusted & experience senior care & love
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                boxShadow: "none",
                border: "none",
                "&:before": { display: "none" },
                padding: "8px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: "#2AA7FF" }} />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "30px",
                    textAlign: "left",
                  }}
                >
                  How to get appointment for emergency cases?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
