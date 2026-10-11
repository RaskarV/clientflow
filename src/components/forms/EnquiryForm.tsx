"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Field";
import { Card } from "@/components/ui/Card";

const FEATURES = [
  "User login",
  "Online payments",
  "Admin dashboard",
  "Booking system",
  "Blog",
  "Analytics",
];

interface FormValues {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  features: string[];
  description: string;
}

type Errors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  features: [],
  description: "",
};

// Pure function: easy to test, and later replaced by a shared Zod schema.
function validate(values: FormValues): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.projectType) errors.projectType = "Choose a project type.";
  const budget = Number(values.budget);
  if (!values.budget || Number.isNaN(budget) || budget < 10000)
    errors.budget = "Enter a budget of at least 10,000.";
  if (!values.timeline) errors.timeline = "Choose a timeline.";
  if (values.description.trim().length < 20)
    errors.description = "Describe your project in at least 20 characters.";
  return errors;
}

export function EnquiryForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function setField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function toggleFeature(feature: string) {
    setField(
      "features",
      values.features.includes(feature)
        ? values.features.filter((f) => f !== feature)
        : [...values.features, feature],
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stop the browser's default page reload
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // TODO (Phase 9): POST to /api/enquiries
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <Card className="text-center">
        <h2 className="text-xl font-bold text-slate-900">Thank you, {values.name}!</h2>
        <p className="mt-2 text-slate-600">
          We received your enquiry and will reply to {values.email} within one working day.
        </p>
        <Button
          className="mt-4"
          variant="secondary"
          onClick={() => {
            setValues(emptyValues);
            setSubmitted(false);
          }}
        >
          Send another enquiry
        </Button>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Your name"
          name="name"
          value={values.name}
          onChange={(e) => setField("name", e.target.value)}
          error={errors.name}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
          error={errors.email}
        />
      </div>

      <Input
        label="Company (optional)"
        name="company"
        value={values.company}
        onChange={(e) => setField("company", e.target.value)}
      />

      <div className="grid gap-5 sm:grid-cols-3">
        <Select
          label="Project type"
          name="projectType"
          value={values.projectType}
          onChange={(e) => setField("projectType", e.target.value)}
          error={errors.projectType}
        >
          <option value="">Select...</option>
          <option>Marketing website</option>
          <option>E-commerce website</option>
          <option>Web application</option>
          <option>Website redesign</option>
        </Select>
        <Input
          label="Budget (INR)"
          name="budget"
          type="number"
          min={0}
          value={values.budget}
          onChange={(e) => setField("budget", e.target.value)}
          error={errors.budget}
        />
        <Select
          label="Timeline"
          name="timeline"
          value={values.timeline}
          onChange={(e) => setField("timeline", e.target.value)}
          error={errors.timeline}
        >
          <option value="">Select...</option>
          <option>1 month</option>
          <option>2 months</option>
          <option>3 months</option>
          <option>4-6 months</option>
        </Select>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-slate-800">Features you need</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {FEATURES.map((feature) => (
            <label key={feature} className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={values.features.includes(feature)}
                onChange={() => toggleFeature(feature)}
              />
              {feature}
            </label>
          ))}
        </div>
      </fieldset>

      <Textarea
        label="Describe your project"
        name="description"
        value={values.description}
        onChange={(e) => setField("description", e.target.value)}
        error={errors.description}
      />

      <Button type="submit">Submit enquiry</Button>
    </form>
  );
}
