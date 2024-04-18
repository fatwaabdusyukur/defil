import "@/assets/css/index.css";
import React from 'react';
import PersonalFilterButton from "../components/PersonalFilterButton";
import Modal from "../components/modal/Modal";
import { injectComponent, injectComponentToRoot } from "../services/inject-component.js";

injectComponentToRoot(<Modal/>);
injectComponent(['div[role="tablist"]', true, 1], <PersonalFilterButton/>);