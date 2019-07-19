/* 
    Plantear un diagrama de clase con los siguientes requisitos e implementar:
        -Herencia
        -Composición
        -Variables protected

        task: npm run ej18
*/

import MatchBuilder from './matchBuilder';
import Schedule from './schedule'

let f = new MatchBuilder()
    .buildPlayer_TeamOne("Estudiantes")
    .buildPlayer_TeamTwo("Boca")
    .buildReferee("Laverni")
    .buildStartTime("14:30 AR")
    .buildCompetition("Superliga")
    .buildPlace("Estadio Unico")
    .buildMatch("football");

let c = new MatchBuilder()
    .buildPlayer_TeamOne("Bobby Fisher")
    .buildPlayer_TeamTwo("Paul Morphy")
    .buildCompetition("World Chess Championship")
    .buildPlace("Moscow")
    .buildStartTime("20:30 AR")
    .buildTimer(180)
    .buildMatch("chess");

let t = new MatchBuilder()
    .buildPlayer_TeamOne("Roger Federer")
    .buildPlayer_TeamTwo("Rafael Nadal")
    .buildCompetition("Wimbledon")
    .buildPlace("England")
    .buildStartTime("08:00 AR")
    .buildFormat("singles")
    .buildSets(5)
    .buildMatch("tennis");

let schedule = new Schedule();
schedule.addMatch(f);
schedule.addMatch(c);
schedule.addMatch(t);

schedule.sortSchedule(); //ordenar partidos por horario de inicio

console.log(schedule.getMatchs());

/* schedule.updateMatch(1,t);
schedule.deleteMatch(3);

console.log(schedule.getMatchs()); */