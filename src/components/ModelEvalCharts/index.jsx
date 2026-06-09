import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COST_DATA = [
  { model: "Sonnet 4.6", "Cost (USD)": 12 },
  { model: "Opus 4.6", "Cost (USD)": 26 },
  { model: "Opus 4.8", "Cost (USD)": 96 },
];

const INPUT_TOKENS_DATA = [
  {
    issue: "RHEL-15216",
    "Sonnet 4.6": 1236132,
    "Opus 4.6": 1099444,
    "Opus 4.8": 1421854,
  },
  {
    issue: "RHEL-112546",
    "Sonnet 4.6": 395277,
    "Opus 4.6": 1974683,
    "Opus 4.8": 1440652,
  },
  {
    issue: "RHEL-114607",
    "Sonnet 4.6": 421587,
    "Opus 4.6": 239754,
    "Opus 4.8": 1045918,
  },
  {
    issue: "RHEL-177992",
    "Sonnet 4.6": 514430,
    "Opus 4.6": 933522,
    "Opus 4.8": 1113364,
  },
  {
    issue: "RHEL-174694",
    "Sonnet 4.6": 1307129,
    "Opus 4.6": 805407,
    "Opus 4.8": 1244698,
  },
];

const OUTPUT_TOKENS_DATA = [
  {
    issue: "RHEL-15216",
    "Sonnet 4.6": 10376,
    "Opus 4.6": 4820,
    "Opus 4.8": 4376,
  },
  {
    issue: "RHEL-112546",
    "Sonnet 4.6": 4646,
    "Opus 4.6": 11268,
    "Opus 4.8": 5864,
  },
  {
    issue: "RHEL-114607",
    "Sonnet 4.6": 5159,
    "Opus 4.6": 1680,
    "Opus 4.8": 4630,
  },
  {
    issue: "RHEL-177992",
    "Sonnet 4.6": 4829,
    "Opus 4.6": 4603,
    "Opus 4.8": 4488,
  },
  {
    issue: "RHEL-174694",
    "Sonnet 4.6": 8553,
    "Opus 4.6": 3635,
    "Opus 4.8": 4507,
  },
];

const TOOL_CALLS_DATA = [
  { issue: "RHEL-15216", "Sonnet 4.6": 26, "Opus 4.6": 24, "Opus 4.8": 26 },
  { issue: "RHEL-112546", "Sonnet 4.6": 9, "Opus 4.6": 37, "Opus 4.8": 25 },
  { issue: "RHEL-114607", "Sonnet 4.6": 10, "Opus 4.6": 6, "Opus 4.8": 20 },
  { issue: "RHEL-177992", "Sonnet 4.6": 12, "Opus 4.6": 21, "Opus 4.8": 21 },
  { issue: "RHEL-174694", "Sonnet 4.6": 20, "Opus 4.6": 13, "Opus 4.8": 17 },
];

const DURATION_DATA = [
  { issue: "RHEL-15216", "Sonnet 4.6": 208, "Opus 4.6": 140, "Opus 4.8": 130 },
  { issue: "RHEL-112546", "Sonnet 4.6": 98, "Opus 4.6": 267, "Opus 4.8": 154 },
  { issue: "RHEL-114607", "Sonnet 4.6": 104, "Opus 4.6": 48, "Opus 4.8": 124 },
  { issue: "RHEL-177992", "Sonnet 4.6": 109, "Opus 4.6": 127, "Opus 4.8": 115 },
  { issue: "RHEL-174694", "Sonnet 4.6": 167, "Opus 4.6": 186, "Opus 4.8": 389 },
];

const fmtM = (v) =>
  v >= 1e6
    ? `${(v / 1e6).toFixed(1)}M`
    : v >= 1e3
      ? `${(v / 1e3).toFixed(0)}k`
      : v;

export function InputTokensChart() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={INPUT_TOKENS_DATA}
        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="issue" tick={{ fontSize: 12 }} />
        <YAxis
          tickFormatter={fmtM}
          label={{
            value: "input tokens",
            angle: -90,
            position: "insideLeft",
            offset: -5,
          }}
        />
        <Tooltip formatter={(value) => [value.toLocaleString()]} />
        <Legend />
        <Bar dataKey="Sonnet 4.6" fill="#4e79a7" />
        <Bar dataKey="Opus 4.6" fill="#f28e2b" />
        <Bar dataKey="Opus 4.8" fill="#e15759" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function OutputTokensChart() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={OUTPUT_TOKENS_DATA}
        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="issue" tick={{ fontSize: 12 }} />
        <YAxis
          tickFormatter={fmtM}
          label={{
            value: "output tokens",
            angle: -90,
            position: "insideLeft",
            offset: -5,
          }}
        />
        <Tooltip formatter={(value) => [value.toLocaleString()]} />
        <Legend />
        <Bar dataKey="Sonnet 4.6" fill="#4e79a7" />
        <Bar dataKey="Opus 4.6" fill="#f28e2b" />
        <Bar dataKey="Opus 4.8" fill="#e15759" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function ToolCallsChart() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={TOOL_CALLS_DATA}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="issue" tick={{ fontSize: 12 }} />
        <YAxis
          label={{
            value: "tool calls",
            angle: -90,
            position: "insideLeft",
            offset: -5,
          }}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sonnet 4.6" fill="#4e79a7" />
        <Bar dataKey="Opus 4.6" fill="#f28e2b" />
        <Bar dataKey="Opus 4.8" fill="#e15759" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function CostChart() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={COST_DATA}
        layout="vertical"
        margin={{ top: 5, right: 40, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tickFormatter={(v) => `$${v}`} />
        <YAxis type="category" dataKey="model" width={80} />
        <Tooltip formatter={(value) => [`$${value}`]} />
        <Bar dataKey="Cost (USD)" fill="#4e79a7" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function DurationChart() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={DURATION_DATA}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="issue" tick={{ fontSize: 12 }} />
        <YAxis unit="s" />
        <Tooltip formatter={(value) => [`${value}s`]} />
        <Legend />
        <Bar dataKey="Sonnet 4.6" fill="#4e79a7" />
        <Bar dataKey="Opus 4.6" fill="#f28e2b" />
        <Bar dataKey="Opus 4.8" fill="#e15759" />
      </BarChart>
    </ResponsiveContainer>
  );
}
