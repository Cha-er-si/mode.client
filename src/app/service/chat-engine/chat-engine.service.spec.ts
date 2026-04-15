import { TestBed } from '@angular/core/testing';

import { ChatEngineService } from './chat-engine.service';

describe('ChatEngineService', () => {
  let service: ChatEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
