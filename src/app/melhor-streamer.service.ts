import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MelhorStreamerService {

  constructor(private httpClient: HttpClient) { }

  // DICA: Para gerar erros, tente trocar o twitch por bla

  // Méotodo publico
  public getMelhorStreamerData(): object {
    return {
      name: 'Leandro Picoloto',
      twitch: 'twitch.tv/comboversogames',
    };
  }

  // Méotodo privado
  private getMelhorStreamerDataPrivate(): object {
    return {
      name: 'Leandro Picoloto',
      twitch: 'twitch.tv/comboversogames',
    };
  }

  // Méotodo assíncrono
  private async getMelhorStreamerDataAsync(): Promise<object> {
    return {
      name: 'Leandro Picoloto',
      twitch: 'twitch.tv/comboversogames',
    };
  }

  // Método Http
  getMelhorStreamerDataHttp(): Observable<object> {
    const url = `url/melhor-streamer`;
    return this.httpClient.get<object>(url);
  }
}
