// Library Imports
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { Server } from "socket.io";
import { Resend } from "resend";
// Models
import CaseModel from "../models/case";
// ENV
import env from "../util/validateEnv";

interface caseCreationBody {
  name?: string;
  phoneNumber?: string;
  emailAddress?: string;
  preferredLanguage?: string;
  dateOfIncident?: string;
  treatmentStatus?: string;
  incidentDescription?: string;
  caseStatus?: string;
}

export const getCase: RequestHandler = async (req, res, next) => {
  try {
    const caseFromDB = await CaseModel.findById(req.params.caseId).exec();

    if (!caseFromDB) {
      return res
        .status(404)
        .json({ error: "Case with the given ID doesn't exist" });
    }

    res.status(200).json(caseFromDB);
  } catch (error) {
    next(error);
  }
};

export const getAllCases: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfCases = await CaseModel.find().exec();

    if (!arrayOfCases) {
      return res.status(404).json({
        error:
          "Unable to fetch cases from the Database, verify server is running properly.",
      });
    }

    res.status(200).json(arrayOfCases);
  } catch (error) {
    next(error);
  }
};

export const getPendingCases: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfPendingCases = await CaseModel.find({
      caseStatus: "Pending",
    }).exec();
    res.status(200).json(arrayOfPendingCases);
  } catch (error) {
    next(error);
  }
};

export const approveCase: RequestHandler = async (req, res, next) => {
  try {
    const approvedCase = await CaseModel.findOneAndUpdate(
      { _id: req.body.caseId },
      { $set: { caseStatus: "Approved" } },
      { new: true }
    ).exec();
    res.status(200).json(approvedCase);
  } catch (error) {
    next(error);
  }
};

export const rejectCase: RequestHandler = async (req, res, next) => {
  try {
    const rejectedCase = await CaseModel.findOneAndUpdate(
      { _id: req.body.caseId },
      { $set: { caseStatus: "Rejected" } },
      { new: true }
    ).exec();
    res.status(200).json(rejectedCase);
  } catch (error) {
    next(error);
  }
};

export const createCase: RequestHandler<
  unknown,
  unknown,
  caseCreationBody,
  unknown
> = async (req, res, next) => {
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const emailAddress = req.body.emailAddress;
  const preferredLanguage = req.body.preferredLanguage;
  const dateOfIncident = req.body.dateOfIncident;
  const treatmentStatus = req.body.treatmentStatus;
  const incidentDescription = req.body.incidentDescription;
  const caseStatus = req.body.caseStatus;

  const io: Server = req.app.get("io");

  try {
    if (
      !name ||
      !phoneNumber ||
      !emailAddress ||
      !preferredLanguage ||
      !dateOfIncident ||
      !treatmentStatus ||
      !incidentDescription
    ) {
      throw createHttpError(
        400,
        "You didn't fill out all of the required fields, try again."
      );
    }

    const newCase = await CaseModel.create({
      name: name,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      preferredLanguage: preferredLanguage,
      dateOfIncident: dateOfIncident,
      treatmentStatus: treatmentStatus,
      incidentDescription: incidentDescription,
      caseStatus: caseStatus,
    });

    res.status(201).json(newCase);
    io.emit("caseReceived", newCase);
    const resend = new Resend(env.EMAIL_KEY);

    await resend.emails.send({
      from: "no-reply@osa-law.com",
      to: ["receptionist@osa-law.com"],
      subject: "New Case Submitted",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html dir="ltr" lang="en">
      
        <body style="font-family:&quot;Times New Roman&quot;,Times,serif;background-color:#e6e6e6;margin:0 auto;padding:40px;color:#264166"><img src="https://www.osa-law.com/assets/Full_Logo-0c350564.png" style="display:block;outline:none;border:none;text-decoration:none" width="300" />
          <h1>
            <p style="font-size:56.8px;line-height:60px;margin:16px 0;background-color:#264166;color:#e6e6e6;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px">We have received a new potential customer:</p>
          </h1>
          <p style="font-size:32px;line-height:30px;margin:16px 0;color:#264166"><strong>Customer Name:</strong> ${name}</p>
          <p style="font-size:32px;line-height:30px;margin:16px 0;color:#264166"><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p style="font-size:32px;line-height:30px;margin:16px 0;color:#264166"><strong>Preferred Language:</strong> ${preferredLanguage}</p>
          <p style="font-size:32px;line-height:30px;margin:16px 0;color:#264166"><strong>Date of Incident:</strong> ${dateOfIncident}</p>
          <p style="font-size:32px;line-height:30px;margin:16px 0;color:#264166"><strong>TreatmentStatus:</strong> ${treatmentStatus}</p>
          <p style="font-size:32px;line-height:30px;margin:16px 0;color:#264166"><strong>Incident Description:</strong> ${incidentDescription}</p>
        </body>
      
      </html>`,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteCase: RequestHandler = async (req, res, next) => {
  try {
    const caseFromDB = await CaseModel.findByIdAndDelete(
      req.body.caseId
    ).exec();

    res.status(200).json(caseFromDB);
  } catch (error) {
    next(error);
  }
};
