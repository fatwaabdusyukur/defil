import "@/assets/css/index.css";
import React from 'react';
import PersonalFilterButton from "../components/PersonalFilterButton";
import { injectComponent } from "../services/inject-component.js";

injectComponent(['div[role="tablist"]', true, 1], <PersonalFilterButton/>);