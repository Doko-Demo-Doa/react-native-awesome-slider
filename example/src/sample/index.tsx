import { Basic } from './src/basic';
import { BinanceSlider } from './src/binance-slider';
import { WithCache } from './src/with-cache';
import { WithCustomBubble } from './src/with-custom-bubble';
import { WithDisableTrack } from './src/with-disable-track';
import { WithHaptic } from './src/with-haptic';
import { WithLottie } from './src/with-lottie';
import { WithStep } from './src/with-step';

export const Examples = {
  Basic,
  BinanceSlider,
  WithCache,
  WithCustomBubble,
  WithDisableTrack,
  WithHaptic,
  WithLottie,
  WithStep,
};

export type ExampleType = keyof typeof Examples;
