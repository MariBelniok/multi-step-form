import { ChangeDetectorRef } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";

export function onPushDetectChanges<T>(fixture: ComponentFixture<T>): void {
  const changeDetector: ChangeDetectorRef = fixture.debugElement.injector.get<ChangeDetectorRef>(
    ChangeDetectorRef as any,
  );
  changeDetector.markForCheck();
  fixture.detectChanges();
}
