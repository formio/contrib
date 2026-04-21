import { Formio } from '@formio/js';
import FormioContrib from './index';

const F = Formio as any;
F.use(FormioContrib);

// Form.io's portal runs its own init AFTER user scripts load via the
// Custom Javascript URL and resets Formio.options = {}. That path
// (Formio.options.builder.builder.custom) can't be used to declare a
// builder group from a URL-loaded bundle — it survives in apps where
// the host controls script order (e.g. SFDigitalServices/formio-sfds),
// but not in the Form.io-hosted portal.
//
// FormBuilder.options is a STATIC class property, not a property of
// Formio.options, so it survives the portal's reset. Every FormBuilder
// instance merges it at construction time:
//
//   // FormBuilder.js constructor:
//   Object.assign(options, FormBuilder.options, Formio.options.builder ?? {})
//
// Mutate FormBuilder.options.builder.custom directly so the Custom
// Components group reaches the builder regardless of when our script
// executes relative to the portal's init lifecycle.

if (F.FormBuilder) {
  F.FormBuilder.options = F.FormBuilder.options || {};
  F.FormBuilder.options.builder = F.FormBuilder.options.builder || {};
  F.FormBuilder.options.builder.custom = F.FormBuilder.options.builder.custom || {
    title: 'Custom Components',
    weight: 5,
    components: {},
  };
}

export default FormioContrib;
