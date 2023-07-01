import { useEffect, useState } from "react";
import teamData from "../api/teams.json";
import Card from "./Card";
function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    try {
      //simulate fetching data
      setTimeout(() => {
        setTeam(teamData.team);
      }, 1000);
    } catch (error) {}
  }, []);

  return (
    <div>
      <section id="team">
        <div className="stellar-container">
          <h2>Our Team</h2>
          <div className="stelar-influencers">
            {team.map((teamMember) => (
              <Card
                key={teamMember.id}
                name={teamMember.name}
                position={teamMember.position}
                image={teamMember.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
