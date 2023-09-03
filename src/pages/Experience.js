import React from 'react'
import { VerticalTimeline,VerticalTimelineElement, } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
function Experience() {
    return (
        <div className='experience'>
 <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          J D DAGA H.S. SCHOOL
Raipur, Chhattisgarh, India 
          </h3>
          <p> CBSE 12th Class || Grade: 92%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          NATIONAL INSTITUTE OF TECHNOLOGY, RAIPUR
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          </h4>

          <p> B.Tech Biomedical Engineering </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="11/2022- 12/2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Fundraising intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Taare Zameen foundation
          </h4>
          <p>Developed website for searching prospective donors and raising funds.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="04/2023 - 06/2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SDE summer intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Amber Flux Pvt Ltd 
          </h4>
          <p>
        	Implemented custom components using the React framework- Material UI to meet the needs of the company's application with 100+ users.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
        </div>
    )
}

export default Experience
