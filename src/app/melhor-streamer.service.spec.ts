import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MelhorStreamerService } from './melhor-streamer.service';

describe('MelhorStreamerService', () => {
  let service: MelhorStreamerService;
  let httpMock: HttpTestingController;

  const mockItem = {
    name: 'Leandro Picoloto',
    twitch: 'twitch.tv/comboversogames',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ MelhorStreamerService ]
    });
    service = TestBed.inject(MelhorStreamerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Méotodo publico
  it('getMelhorStreamerData deve buscar um objeto que contém nome e twitch do melhor streamer do mundo', () => {
    const melhorStreamerData = service.getMelhorStreamerData();
    const melhorStreamerDataFields = Object.keys(melhorStreamerData);
    expect(typeof (melhorStreamerData)).toBe('object');
    expect(melhorStreamerDataFields.length).toEqual(2);
    expect(melhorStreamerDataFields.includes('name') && melhorStreamerDataFields.includes('twitch'))
      .toBeTruthy();
  });

  // Méotodo privado
  it('getMelhorStreamerDataPrivate deve buscar um objeto que contém nome e twitch do melhor streamer do mundo', () => {
    const melhorStreamerData = service['getMelhorStreamerDataPrivate']();
    const melhorStreamerDataFields = Object.keys(melhorStreamerData);
    expect(typeof (melhorStreamerData)).toBe('object');
    expect(melhorStreamerDataFields.length).toEqual(2);
    expect(melhorStreamerDataFields.includes('name') && melhorStreamerDataFields.includes('twitch'))
      .toBeTruthy();
  });

  // Méotodo assíncrono
  it('getMelhorStreamerDataAsync deve buscar um objeto que contém nome e twitch do melhor streamer do mundo', (done: DoneFn) => {
    service['getMelhorStreamerDataAsync']().then(melhorStreamerData => {
      const melhorStreamerDataFields = Object.keys(melhorStreamerData);
      expect(typeof (melhorStreamerData)).toBe('object');
      expect(melhorStreamerDataFields.length).toEqual(2);
      expect(melhorStreamerDataFields.includes('name') && melhorStreamerDataFields.includes('twitch')).toBeTruthy();
      done();
    });
  });

  // Método Http
  it('getMelhorStreamerDataHttp deve buscar um objeto que contém nome e twitch do melhor streamer do mundo do servidor', () => {
    service
      .getMelhorStreamerDataHttp()
      .subscribe((response: any) => {
        const melhorStreamerDataFields = Object.keys(response[0]);
        expect(typeof (response)).toBe('object');
        expect(melhorStreamerDataFields.length).toEqual(2);
        expect(melhorStreamerDataFields.includes('name') && melhorStreamerDataFields.includes('twitch')).toBeTruthy();
      });
  
    const httpRequest = httpMock.expectOne('url/melhor-streamer');
  
    expect(httpRequest.request.method).toEqual('GET');
    expect(httpRequest.request.responseType).toEqual('json');
  
    httpRequest.flush([mockItem]);
  });
});
