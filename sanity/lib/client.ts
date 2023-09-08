import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:  "skILGNPjcj8T3BxYSO19BFg9Yt7zVLrVJRj2EY73UhLMVUtKE2yzGDC57hmlfbNtDEPzT7M9KdzWLu4UXibMWk7c9l39oQ5Si6zumSzitRQsiSJRfGHTPC8qrp2VKAUSH2dIPuUSMalDraUNP4lzhChaSJTVJHYjnYaCbT2ZX7uVFW3n5zkq"
})
