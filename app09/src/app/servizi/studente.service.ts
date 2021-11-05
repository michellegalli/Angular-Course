import { Injectable } from '@angular/core';
import { studenti } from '../data/studenti';
import { Studente} from '../models/studente'
import { LoggerService } from '../services/logger.service';
@Injectable({
  providedIn: 'root'
})
export class StudenteService {

  constructor(private ls: LoggerService) { }
  
  getStudenti(): Studente[]{
    this.ls.log("Stidente Service: caricato elenco studenti")
  return studenti

  }
}
