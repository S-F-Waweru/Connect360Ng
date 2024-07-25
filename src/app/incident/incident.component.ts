import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { IncidentAction } from '../State/Actions/incidents.actions';
import { getAllIncidentsSelector } from '../State/Selectors/incidents.selectors';
import { Incident } from '../Models/Incident';

@Component({
  selector: 'app-incident',
  standalone: true,
  imports: [],
  templateUrl: './incident.component.html',
  styleUrl: './incident.component.css'
})
export class IncidentComponent implements OnInit {

  constructor(
    private activeRoute : ActivatedRoute,
    private store:Store<AppState>,
    private route:Router

  ){
  }
  incident!:Incident

  ngOnInit(): void {
      this.activeRoute.paramMap.subscribe(params => {
          const incidentId = params.get('id')
          console.log(incidentId)

          //getIncidents
          this.store.dispatch(IncidentAction.getIncidents())

          this.store.select(getAllIncidentsSelector).subscribe(incidents =>{

            if(incidents){
              const incident = incidents.filter(i => i.Id === incidentId)
              this.incident = incident[0]
            }


          })
      })
  }

  home(){
    this.route.navigate(['incidents'])
  }


}
