import { StyleSheet } from "react-native";

const POST_ID = 12;
const USER_ID = 12;
const IMAGE_LINK =
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";
const POST_TITLE = "Post title";
const ACCESS_TOKEN = "2213b9c0bbcc264c29493e0a4c079a21d1023525";
const BASE_URL = "https://demo-flag-user-43359.botics.co";

const styles = StyleSheet.create({
  // Home
  noButtonText: { fontSize: 18, color: "#fff", fontWeight: "500" },
  yesButtonText: { fontSize: 18, color: "#333", fontWeight: "500" },
  noButton: {
    height: 40,
    width: 130,
    borderWidth: 2,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#333"
  },
  yesButton: {
    height: 40,
    width: 130,
    borderWidth: 2,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    marginHorizontal: 25
  },
  submitButtonText: { color: "#333", fontSize: 16, fontWeight: "bold" },
  submitButton: {
    marginTop: 10,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#333"
  },
  reasonInput: {
    borderWidth: 2,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    height: 150,
    marginBottom: 30,
    padding: 10
  },
  reportPostText: { textDecorationLine: "underline" },
  postImage: { height: 350, width: 357, borderRadius: 10 },
  postTitle: { fontSize: 18, color: "#000" },
  postHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 20
  },
  mainView: {
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
      shadowOpacity: 0.29,
      shadowRadius: 4.65
    },
    elevation: 7
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },

  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginTop: 150,
    borderWidth: 3,
    marginHorizontal: 10
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  reportItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 5
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  // Blocked User
  blockedUserContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  reportedItem: {
    marginVertical: 10,
    marginHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
    padding: 10
  },
  title: {
    fontSize: 18
  }
});

export default {
  POST_ID: POST_ID,
  USER_ID: USER_ID,
  IMAGE_LINK: IMAGE_LINK,
  POST_TITLE: POST_TITLE,
  BASE_URL: BASE_URL,
  ACCESS_TOKEN: ACCESS_TOKEN,
  styles
};
